import { render } from 'enzyme'
import BottomTabNavigation from '../../components/BottomTabNavigation/BottomTabNavigation'

// Renders correctly with valid props
it('should render correctly with valid props', () => {
  const activeTab = 0
  const tabs = [
    {
      label: 'Tab 1', route: 'tab1', method: 'Ionicons', icon: 'ios-home',
    },
    {
      label: 'Tab 2', route: 'tab2', method: 'AntDesign', icon: 'user',
    },
    {
      label: 'Tab 3', route: 'tab3', method: 'FontAwesome', icon: 'bell',
    },
  ]
  const navigation = {
    navigate: jest.fn(),
    goBack: jest.fn(),
  }

  const wrapper = render(
    // eslint-disable-next-line react/react-in-jsx-scope
    <BottomTabNavigation
      activeTab={activeTab}
      tabs={tabs}
      navigation={navigation}
    />,
  )

  expect(wrapper).toMatchSnapshot()
})
