export interface IVipProgram {
  title: string;
  header: string;
  description: string;
  parts: Array<IVipProgramPart>;
}

interface IVipProgramPart {
  image: string;
  description: string;
}
