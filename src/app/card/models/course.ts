// export class course {
//     imageSrc: string;
//     title: string;
//     description: string;
//     time: string;
//     due: string;

//     constructor(_imageSrc: string,
//         _title: string,
//         _description: string,
//         _time: string,
//         _due: string
//     ) 
//     {
//         this.imageSrc = _imageSrc
//         this.title = _title
//         this.description = _description
//         this.time = _time
//         this.due = _due
//     }
// }


export interface course {
    progress: string
    collapse: boolean
    expand: boolean
    key: number
    imageSrc: string;
    title: string;
    description: string;
    time: string;
    due: string;
    linked: [
        {
            key: number
            imageSrc: string;
            title: string;
            description: string;
            time: string;
            due: string;
        }
    ]
}