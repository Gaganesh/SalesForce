import AddFriendScreen from "../AddFriendScreen";
import renderer from 'react-test-renderer';
|import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const navigation = jest.mock(()=> {});
describe("snapshot testing for friend screen", () => {
  const tree =  renderer.create(<AddFriendScreen navigation = {navigation}/>);
  expect(tree).toMatchSnapshot();
})