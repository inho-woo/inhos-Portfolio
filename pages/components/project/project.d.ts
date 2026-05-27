export namespace ProjectInterface {
  export interface ProjectsResponse {
    results?: Project[];
  }

  export interface Project {
    id: string;
    cover?: {
      external?: {
        url?: string;
      };
      file?: {
        url?: string;
      };
    };
    properties?: {
      Tags?: {
        multi_select?: Tag[];
      };
      Work?: {
        rich_text?: RichText[];
      };
      Date?: {
        rich_text?: RichText[];
      };
      Project?: {
        title?: RichText[];
      };
      Image?: {
        rich_text?: RichText[];
      };
    };
  }

  export interface RichText {
    plain_text?: string;
  }

  export interface Tag {
    id: string;
    name: string;
    color: string;
  }
}
