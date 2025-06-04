import process from 'node:process';

export interface CreateComponentDto {
  component: {
    name: string;
    schema: any;
  };
}

class StoryblokService {
  private readonly baseUrl: string;
  private readonly accessToken: string;
  private readonly spaceId: string;

  constructor() {
    this.baseUrl = process.env.STORYBLOK_MAPI_URL!;
    this.accessToken = process.env.STORYBLOK_MANAGEMENT_API_TOKEN!;
    this.spaceId = process.env.STORYBLOK_SPACE_ID!;
  }

  public createComponent = async (component: CreateComponentDto) => {
    return fetch(`${this.baseUrl}/v1/spaces/${this.spaceId}/components`, {
      method: 'POST',
      headers: {
        Authorization: this.accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ component }),
    });
  };
}

export default StoryblokService;
