import React from "react";
import FollowTabComponent from "../components/follow/FollowTabComponent";
import FollowPagecontent from "../components/follow/FollowPagecontent";

const FollowPage = () => {
    const [tabstate, setState] = React.useState(0);
    const changeTab = (switchtoTab) => {
        setState(switchtoTab);
    }
    return <div className="followpage">
        <h1>Khám phá thế giới</h1>
        <p>Ở đây có các chủ đề và tác giả mà bạn có thể quan tâm.</p>
        <FollowTabComponent tabstate={tabstate} changeTab={changeTab} />
        <FollowPagecontent tabstate={tabstate} />
    </div>
}

export default FollowPage;