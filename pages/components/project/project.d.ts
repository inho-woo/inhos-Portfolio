export namespace ProjectInterface {

  interface Project {
    id: string;
    results: ProjectResult[];
    cover : {
      external: {
        url : string;
      };
      file : {
        url : string;
      }
    };
    properties: {
      Tags: {
        multi_select: any; //... 
      };
      Work: {
        rich_text: {
          plain_text: any;
        }[];
      };
      Date: {
        rich_text: {
          plain_text: string;
        }[];
      };
      Project: {
        title: {
          plain_text: string;
        }[];
      };
      Image : {
        rich_text : {
          plain_text: string,
        }[];
      } // 20240717 추가 imgbb로 이미지를 불러오기 위한 interface 수정
    };
  }
  
  interface ProjectResult extends Project {
    id: string;
  }
 
  interface Tag {
    id: string;
    name: string;
    color : string;
  }

  interface Work {
    item: string;
    index : number;
  }
  
}
 