import React, {useState} from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function ResultData() {
  const [progress, setProgress] = useState(0);

  React.useEffect(() => {
      setProgress(30);
  }, []);

  return (
    <div>
      <div>
          <h3>Your Result in Linux Easy </h3>
          <p>30 out of 100</p>
          <CircularProgress variant="determinate" value={progress} />
      </div>
      
    </div>
  );
}



