import { Card, CardBody } from "@chakra-ui/react";
import { CareerInterface } from "./career";

const CardItem = ({data} : {data : CareerInterface.Project}) => {
    
    const title = data.properties.Project.title[0].plain_text; //Notion 프로젝트별 Title
    const tags  = data.properties.Tags.multi_select; // Notion 프로젝트별 Tags
    const work = data.properties.Work.rich_text[0].plain_text; // Notion 프로젝트별 Work
    const date = data.properties.Date.rich_text[0].plain_text; // Notion 프로젝트별 Date

    //Project 별 Tag 세팅
    const tageName : string[] = tags.map((tag : CareerInterface.Tag) => tag.name);

    return (
        <>
        <Card className="max-w-sm">
            <CardBody>
                
            </CardBody>
        </Card>
        <div>
            <h1>{title}</h1>
        </div>
        <div>
            <h1>{tageName}</h1>
        </div>
        <div>
            <h1>{work}</h1>
        </div>
        <div>
            <h1>{date}</h1>
        </div>

        </>
    );
}

export default CardItem;
