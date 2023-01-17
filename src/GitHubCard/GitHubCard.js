import React from "react"
import Card from "react-bootstrap/Card"
import Avatar from "./avatar-icon.png"

function GitHubCard() {
    return (
        <div className="card">
          <Card style={{ width: "18rem"}}>
          <Card.Img variant="top" src={Avatar} />
          <Card.Body>
              <Card.Title>kaden-wallin</Card.Title>
              <Card.Text>
                
JS-Stock-Charts Public

JS-Encapsulation-Practice Public

JS-Building-Targeted-Ads Public

5.7.6 activity starter

JS-Building-an-Interactive-Map Public

JS-Jacks-Paint Public

JS-Alliance-Brand Public

Activity for 5.6.2

JS-Web-Game-Part-7 Public

JS-Asynchrony-With-Callback-Functions Public

5.5.5-activity-array-automotive Public

JS-Web-Game-Part-6 Public

JS-Callback-Practice Public

JS-Web-Game-Part-2 Public

JS-Web-Game-Part-1 Public

CSS-Final-Project Public

RR-Mocking-HTTP-Requests

              </Card.Text>
          </Card.Body>
          </Card>
        </div>
    );
  }

  export default GitHubCard