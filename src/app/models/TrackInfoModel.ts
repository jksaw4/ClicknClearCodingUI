export class TrackInfoModel
{
    id: number
    
	title: string;
	artist: string;

	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
}