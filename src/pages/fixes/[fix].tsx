import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { PageLayout } from '@/layouts'
import { DataService } from '@/services'
import { AUTO_TECH_IQ } from '@/constants/api.constants'
import { FixDetailsPageContainer } from '@/containers'
import { IFixData } from '@/types/fixes-page/types.js'
import { ILink, IStates } from '@/types/fixes-page/types'

interface IProps {
  fixData: IFixData
}

const FixDetailsPage: NextPage<IProps> = ({ fixData }) => {
  const { query } = useRouter()
  const currentFix = query.fix

  console.log(fixData)

  const { title, bg_image, states, other_fixes, all_states } = fixData

  return (
    <PageLayout title={`${AUTO_TECH_IQ} - ${currentFix}`}>
      <FixDetailsPageContainer data={fixData} />
    </PageLayout>
  )
}

interface IFixPath {
  top_fix_slug: string
}

//=> Create all pages of fixes
export const getStaticPaths: GetStaticPaths = async () => {
  const fixes = await DataService.getFixes()

  const fixesPaths = fixes.map(({ top_fix_slug }: IFixPath) => ({
    top_fix_slug,
  }))

  return {
    paths: fixesPaths?.map(({ top_fix_slug }: IFixPath) => ({
      params: {
        fix: top_fix_slug,
      },
    })),
    fallback: false,
  }
}

//=> Create data object for each fix, filter fix by top_fix_slug from api/fixes
export const getStaticProps: GetStaticProps<IProps> = async ({ params }) => {
  const fixes = await DataService.getFixes()

  const filteredFix = fixes.find(
    ({ top_fix_slug }: IFixPath) => top_fix_slug === params?.fix
  )
  const { fix, _title, stateLinks, relatedLinks, allStateLinks } = filteredFix

  const fixData = {
    title: _title,
    bg_image: fix.headerImageSrc,
    states: stateLinks.map(({ state_id, state_name, fixslug }: IStates) => ({
      id: state_id,
      state: state_name,
      path: fixslug,
    })),
    other_fixes: relatedLinks.map(({ _title, fixslug }: ILink) => ({
      title: _title,
      path: fixslug,
    })),
    all_states: allStateLinks.map(
      ({ state_id, state_name, fixslug }: IStates) => ({
        id: state_id,
        state: state_name,
        path: fixslug,
      })
    ),
  }

  return {
    props: {
      fixData,
    },
  }
}

export default FixDetailsPage
