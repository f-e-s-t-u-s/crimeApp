import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Report from "../screens/home/Report";
import Hotlines from "../screens/home/Hotlines";
import Settings from "../screens/home/Settings";

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => ( 
  <Tab.Navigator>
    <Tab.Screen name="Report Incident" component={Report} />
    <Tab.Screen name="Hotlines" component={Hotlines} />
    <Tab.Screen  name="Settings" component={Settings}/>
  </Tab.Navigator>
);

export default HomeTabNavigator;
