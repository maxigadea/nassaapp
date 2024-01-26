import { env } from 'process';
import { imageData } from './definitions';
import { format } from 'date-fns';

export async function fetchImagesByRange(
  firstDayOfMonth: Date,
  lastDayOfMonth: Date,
  actualDate: Date,
): Promise<imageData[]> {
  //This logic is necessary, because the NASA API didn't support dates futures than the current day
  const startDate = format(firstDayOfMonth, 'yyyy-MM-dd');
  const endDate =
    Date.parse(lastDayOfMonth.toDateString()) <=
    Date.parse(actualDate.toDateString())
      ? format(lastDayOfMonth, 'yyyy-MM-dd')
      : format(actualDate, 'yyyy-MM-dd');

  try {
    const response = await fetch(
      `${env.API_DOMAIN}/planetary/apod?start_date=${startDate}&&end_date=${endDate}&&api_key=${env.API_KEY}`,
    );
    const imagesAll = await response.json();
    return imagesAll;
  } catch (error) {
    console.error('Server Error:', error);
    throw new Error('Failed to fetch nasa api data.');
  }
}

export async function fetchImagesByDate(actualDate: string): Promise<imageData> {
  try {
    const response = await fetch(
      `${env.API_DOMAIN}/planetary/apod?date=${actualDate}&&api_key=${env.API_KEY}`,
    );
    const image = await response.json();
    return image;
  } catch (error) {
    console.error('Server Error:', error);
    throw new Error('Failed to fetch nasa api data.');
  }
}
