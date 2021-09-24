import "./Content.css"
import Content2 from "./Content2";
import Content3 from "./Content3";
import Content4 from "./Content4";
function Content() {
    return (
      <>
        <div className="bunner">
            <div className="nav">
                <h2>디아나</h2>
                <ul>
                    <li>
                        <a href="bunner1">약</a>
                    </li>
                    <li>
                        <a href="bunner2">연락하다</a>
                    </li>
                    <li>
                        <a href="bunner3">서비스</a>
                    </li>
                    <li>
                        <a href="bunner4">내집</a>
                    </li>
                </ul>
            </div>
            <h1>
                조용한!
                옷은 그 자체로 말할 것입니다!
            </h1>
        </div>
        <Content2 />
        <Content3 />
        <Content4 />
      </>
    );
  }
  
  export default Content;