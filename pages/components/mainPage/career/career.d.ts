export namespace CareerInterface {

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

    };
  }
  
  interface ProjectResult extends Project {
    id: Key;
  }
 
  interface Tag {
    id: Key;
    name: string;
    color : string;
  }
  
}
 