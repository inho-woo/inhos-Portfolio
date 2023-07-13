export namespace CareerInterface {

  interface Project {
    id: string;
    results: ProjectResult[];
    properties: {
      Tags: {
        multi_select: any; //... 
      };
      Work: {
        rich_text: {
          plain_text: string;
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
 d
  interface Tag {
    name: string;
  }
  
}
 