import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css"

export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let COLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let RAIN_URL = "https://plus.unsplash.com/premium_photo-1687418992343-38c7d2751406?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // let info={
    //     city : "Pune",
    //     feelsLike : 24.84,
    //     temp : 25.05,
    //     tempMin : 25.05,
    //     tempMax : 25.05,
    //     humidity : 47,
    //     weather : "overcast clouds",
    // };

    return (
        <div className="InfoBox">
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : (info.temp > 15 ? HOT_URL : COLD_URL)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>{info.city}</b>{
          info.humidity > 80 ? <ThunderstormIcon className="weatherIcon"/> : (info.temp > 15 ? <WbSunnyIcon className="weatherIcon"/> : <AcUnitIcon className="weatherIcon"/>)
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"} >
            <p>
                Temperature = {info.temp}&deg;C
            </p>
            <p>
                Humidity = {info.humidity}
            </p>
            <p>
                Min Temp = {info.tempMin}&deg;C
            </p>
            <p>
                Max Temp = {info.tempMax}&deg;C
            </p>
            <p>
                The Weather can be describes as <b><i>{info.weather}</i></b> and feels like = {info.feelsLike}&deg;C
            </p>
            
        </Typography>
      </CardContent>
  
    </Card>
    </div>
        </div>
    )
}