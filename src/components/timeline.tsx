import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TimelineData, { TimelineItem as TimelineDataItem } from '../data/timelineData';

const UpdatedTimeline: React.FC = () => {
  return (
    <div className="timeline-container">
      <h1 className="timeline-title">My Journey</h1>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.25, // Adjust width of the opposite content
          },
        }}
      >
        {TimelineData.map((item: TimelineDataItem, index: number) => (
          <TimelineItem key={index}>
            {/* Date and Location */}
            <TimelineOppositeContent>
              <Typography variant="body2" color="text.secondary">
                {item.date}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.location}
              </Typography>
            </TimelineOppositeContent>

            {/* Timeline Separator */}
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index < TimelineData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            {/* Main Content */}
            <TimelineContent>
              <Typography variant="h6" color="primary">
                {item.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {item.company}
              </Typography>
              {item.description && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {item.description}
                </Typography>
              )}
              {item.skills && (
                <Typography variant="body2" sx={{ mt: 1, fontWeight: 'bold' }}>
                  Skills: {item.skills}
                </Typography>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default UpdatedTimeline;