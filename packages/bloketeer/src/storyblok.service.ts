import process from 'node:process';
import { Component, Space } from './types';

class StoryblokService {
  private readonly baseUrl: string;
  private readonly accessToken: string;
  private readonly spaceId: string;

  constructor() {
    this.baseUrl = process.env.STORYBLOK_MAPI_URL!;
    this.accessToken = process.env.STORYBLOK_MANAGEMENT_API_TOKEN!;
    this.spaceId = process.env.STORYBLOK_SPACE_ID!;
  }

  public listComponents = async () => {
    return fetch(`${this.baseUrl}/v1/spaces/${this.spaceId}/components`, {
      method: 'GET',
      headers: {
        Authorization: this.accessToken,
        'Content-Type': 'application/json',
      },
    });
  };

  public createComponent = async (component: Component) => {
    return fetch(`${this.baseUrl}/v1/spaces/${this.spaceId}/components`, {
      method: 'POST',
      headers: {
        Authorization: this.accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ component }),
    });
  };

  public createSpace = async (space: Space) => {
    return fetch(`${this.baseUrl}/v1/spaces`, {
      method: 'POST',
      headers: {
        Authorization: this.accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ space }),
    });
  };
}

export default StoryblokService;
