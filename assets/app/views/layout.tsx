import * as React from "react"
import { Route, Switch } from "react-router-dom"
import Nav from "../components/nav/nav"
import Main from "./main/main"
import Reddit from "./reddit/reddit"
import Slack from "./slack/slack"
import HN from "./hacker_news/hacker_news"
import Chat from "./chat/chat"
import TwitterView from "./twitter/twitter"

import "office-ui-fabric-react/dist/css/fabric.min.css"
import * as Style from "./layout_style"

export default class RootLayout extends React.Component<{}, {}> {
  public render() {
    return (
      <div className={Style.CONTAINER}>
        {
          /Android|iPhone/i.test(navigator.userAgent) ? null : <Nav />
        }
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/reddit" component={Reddit} />
          <Route path="/slack" component={Slack} />
          <Route path="/hn" component={HN} />
          <Route path="/chat" component={Chat} />
          <Route path="/twitter/:name" component={TwitterView} />
        </Switch>
      </div>
    )
  }
}
