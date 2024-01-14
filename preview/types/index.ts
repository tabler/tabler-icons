export type IconSvgsType = {
  outline: string;
  solid?: string;
};

export type IconType = {
  slug: string;
  svgs: IconSvgsType;
  data: {
    unicode?: string;
    tags?: string[];
    category?: string;
    version?: string;
  };
};
