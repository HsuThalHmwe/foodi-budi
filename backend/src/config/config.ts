interface Config {
  jwtScrect: string;
}

export const config: Config = {
  jwtScrect: process.env.JWT_SECRET || "",
};
