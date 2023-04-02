export interface ILastNews {
  header: string;
  items: Array<{
    image: string;
    tag: string;
    date: string;
    header: string;
    more: string;
  }>;
  footer: string;
}
