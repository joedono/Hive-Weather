import { WU_Image } from "./image";
import { WU_Location } from "./location";

export class WU_Observation {
  image: WU_Image;
  display_location: WU_Location;
  observation_location: WU_Location;
  station_id: string;
  observation_time: string;
  observation_time_rfc822: string;
  observation_epoch: number;
  local_time_rfc822: string;
  local_epoch: number;
  local_tz_short: string;
  local_tz_long: string;
  local_tz_offset: string;
  weather: string;
  temperature_string: string;
  temp_f: number;
  temp_c: number;
  relative_humidity: string;
  wind_string: string;
  wind_dir: string;
  wind_degrees: number;
  wind_mph: number;
  wind_gust_mph: number;
  wind_kph: number;
  wind_gust_kph: number;
  pressure_mb: number;
  pressure_in: number;
  pressure_trend: string;
  dewpoint_string: string;
  dewpoint_f: number;
  dewpoint_c: number;
  heat_index_string: string;
  heat_index_f: string;
  heat_index_c: string;
  windchill_string: string;
  windchill_f: string;
  windchill_c: string;
  feelslike_string: string;
  feelslike_f: number;
  feelslike_c: number;
  visibility_mi: number;
  visibility_km: number;
  solarradiation: number;
  UV: number;
  precip_1hr_string: string;
  precip_1hr_in: number;
  precip_1hr_metric: number;
  precip_today_string: string;
  precip_today_in: number;
  precip_today_metric: number;
  icon: string;
  icon_url: string;
  forecast_url: string;
  history_url: string;
  ob_url: string;
}