export class Study{
    constructor(
    public Studyid: String ,
	public description: String,
	public date: String,
	public due: String,
    public unreviewed: String,
    public pending: String,
    public idrp: String,
    ){}
}


export interface FormData {
    expectedDataForm:string;
    expectedDataCategory:string[];
  }

export interface AddData {
    dataTrajectoryName:string;
    description:string[];
  }