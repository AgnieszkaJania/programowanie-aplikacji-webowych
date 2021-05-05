export interface Game {
  name: string;
  getGameElement(): HTMLElement;
  disable: boolean;
}
