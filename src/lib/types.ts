export interface StartupProps {
    id: string  
    name: string
    logo: string
    founded: number
    industry: string
    tagline: string
    lookingFor: string | null | undefined
    desc: string
    development: string
    region: string
    stage: string
    fundGoal: string | null | undefined
    milestones: string
    teamSize: string
    teamDesc: string
    website: string | null | undefined
    linkedin: string | null | undefined
    twitter: string | null | undefined
    otherSocial: string | null | undefined
    pitch: string | null | undefined
    video: string | null | undefined
}

export interface StartupCardType{
    id: string
    name: string
    logo: string
    founded: string
    industry: string
    tagline: string
    lookingFor: string
    region: string
    stage: string
    fundGoal: string
}