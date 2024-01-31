import { TopDashNav } from "~/_components/nav";
import StartupGrid from "~/_components/startups";

export default function Gallery ()  {
  // LIMIT TAGLINE TO 100CHAR AND MINIMUM OF 60CHAR
  return (
      <>
        <TopDashNav title="Gallery"/>
        <StartupGrid/>
      </>
    );

  }


