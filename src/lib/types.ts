export interface StartupProps {
    id: string  
    name: string
    logo: string
    founded: Date
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
    name: string | null
    logo: string
    founded: Date
    industry: string | null
    tagline: string | null
    lookingFor: string | null
    region: string | null
    stage: string | null
    fundGoal: string | null
}