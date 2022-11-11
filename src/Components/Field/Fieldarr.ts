import internal from "stream";

interface FieldarrInt{
    input?:string;
    type:string;
    label:string;
    required?:boolean;
    heading?:string;
    placeholder?:string;
    minLength?:number;
    maxLength?:number ;
    pattern?:any;
}
interface Fieldarr5Int{
    input:string;
    type:string;
    label:string;
    required:boolean;
    options:string[];
    dataHead?:{
        head:string;
        desc:string;
    }[]
}
export const Fieldarr:FieldarrInt[] = [
    {
        input:"fullName",
        type:"text",   
        label:"fullName",
        required:true,

    },
    {
        input:"Email",
        type:"text",   
        label:"Email",
        required:true,
        pattern: "/^[A-Z0-9. _%+-]+@[A-Z0-9. -]+\."
        
    },
    {
        input:"Phone",
        type:"text",   
        label:"Phone",
        minLength:6,
        maxLength:10,
        required:false
    },
    {
        input:"Current Company",
        type:"text",   
        label:"Current Company",
        required:false
    }
] 

export const Fieldarr2:FieldarrInt[] = [
    {
        input:"Linked URL",
        type:"text",   
        label:"Linked URL",
        required:false,
        pattern:"[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%"
    },
    
    {
        input:"Twitter URL",
        type:"text",   
        label:"Twitter URL",
        required:false
    },
    
    {
        input:"Github URL",
        type:"text",   
        label:"Github URL",
        required:false
    },
    
    {
        input:"Portfolio URL",
        type:"text",   
        label:"Portfolio URL",
        required:false
    },
    
    {
        input:"Other website",
        type:"text",   
        label:"Other website",
        required:false
    },
]

export const Fieldarr3:FieldarrInt[] = [
    {   
        heading:"PREFERRED PRONOUNS",
        input:"Response",
        type:"text",
        label:"If youd like, please share your pronouns with us.",
        placeholder:"Type Your Response",
        required:false
    }
]

export const Fieldarr4:FieldarrInt[] = [
    {   
        heading:"ADDITIONAL INFORMATION",
        input:"AddInfo",
        type:"text",
        label:"additional information",
        placeholder:"Add a cover letter or anything else you want to share",
        required:false
    },
]

interface Fieldarr5Int{
    input:string;
    type:string;
    label:string;
    required:boolean;
    options:string[];
    dataHead?:{
        head:string;
        desc:string;
    }[]
}
export const Fieldarr5:Fieldarr5Int[] = [
    {
        input:"Gender",
        type:"select",   
        label:"Gender",
        required:false,
        options:[
            "Select ...",
            "Male",
            "Female",
            "Decline to self identify",
        ]
    },
    {
        input:"Race",
        type:"select",   
        label:"Race",
        required:false,
        options:[
            "Select ...",
            "Hispanic or Latino",
            "White (Not Hispanic or Latino)",
            "Black or African American (Not Hispanic or Latino)",
            "Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)",
            "Asian (Not Hispanic or Latino)",
            "American Indian or Alaska Native (Not Hispanic or Latino)",
            "Two or More Races (Not Hispanic or Latino)"
        ],
        dataHead:[
            {
                head:'Hispanic or Latino',
                desc:'A person of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin regardless of race.'
            },
            {
                head:'White (Not Hispanic or Latino)',
                desc:'A person having origins in any of the original peoples of Europe, the Middle East, or North Africa.'
            },
            {
                head:'Black or African American (Not Hispanic or Latino)',
                desc:'A person having origins in any of the black racial groups of Africa.'
            },
            {
                head:'Native Hawaiian or Other Pacific Islander (Not Hispanic or Latino)',
                desc:'A person having origins in any of the peoples of Hawaii, Guam, Samoa, or other Pacific Islands.'
            },
            {
                head:"Asian (Not Hispanic or Latino)",
                desc:'A person having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian Subcontinent, including, for example, Cambodia, China, India, Japan, Korea, Malaysia, Pakistan, the Philippine Islands, Thailand, and Vietnam'
            },
            {
                head:"American Indian or Alaska Native (Not Hispanic or Latino)",
                desc:'A person having origins in any of the original peoples of North and South America (including Central America), and who maintain tribal affiliation or community attachment.'
            },
            {
                head: "Two or More Races (Not Hispanic or Latino)",
                desc:'All persons who identify with more than one of the above five races.'
            },

        ],
        
    },
    {
        input:"Veteran Status",
        type:"select",   
        label:"Veteran Status",
        required:false,
        options:[
            "Select ...",
            "I am a veteran",
            "I am not a verteran",
            "Decline to self identify",
        ]
    },


]