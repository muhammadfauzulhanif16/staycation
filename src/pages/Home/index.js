import React from "react";
import { Header } from "../../components/Header";

// export default class Home extends Component {
//   render() {
//     return (
//       <>
//         <Header {...this.props} />
//       </>
//     );
//   }
// }

export const Home = (props) => {
  return (
    <>
      <Header {...props} />
    </>
  );
};
