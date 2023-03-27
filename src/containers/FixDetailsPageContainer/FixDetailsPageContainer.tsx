import { StateCitySection, TitleSection, OtherFixesSection } from './sections'
import { IFixData, IStates } from '@/types/fixes-page/types.js'

interface IProps {
  data: IFixData
}

function FixDetailsPageContainer({ data }: IProps) {
  const { title, bg_image, states, other_fixes, all_states } = data
  return (
    <>
      <TitleSection title={title} image={bg_image} />
      <StateCitySection states={states} title={title} />
      <OtherFixesSection title={title} other_fixes={other_fixes} />
      <StateCitySection isColumn states={all_states} title={title} />
    </>
  )
}

export default FixDetailsPageContainer
