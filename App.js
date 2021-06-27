import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LandingPage from './src/apps/landingpage';
import Search from './src/apps/search';
import PDP from './src/apps/pdp';

const RootNavigator = createStackNavigator(
	{
		Home: {
			screen: LandingPage,
			navigationOptions: () => ({
				headerShown: false,
			}),
			headerStyle: {
				backgroundColor: '#f4511e',
			  },
		},
		Search: {
			screen: Search,
			navigationOptions: () => ({
				title: 'Search',
				headerStyle: {
					backgroundColor: '#f4511e',
				  },
			}),
		},
		PDP: {
			screen: PDP,
			navigationOptions: () => ({
				title: 'spare parts',
			}),
			headerStyle: {
				backgroundColor: '#f4511e',
			  },
		},
	},
	{
		initialRouteName: 'Home',
	}
);

export default createAppContainer(RootNavigator);