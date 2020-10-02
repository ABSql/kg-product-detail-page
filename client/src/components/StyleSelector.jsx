import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    paddingTop: '20',
    '& > *': {
      height: 80,
      width: 80,
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const RelatedStyles = ({relatedStyles, selected, selectedStyleHandler}) => {
  const classes = useStyles();
  console.log('selected: ', selected)

  const ThumbnailRender = () => {
    if (relatedStyles !== undefined && selected !== undefined) {
      return (
        <div class="container">
          <div class="row">
            {relatedStyles.map((style) => (
              <div key="style.style_id" class="col-sm-3">
              <Box p={1}>
              <Badge
                badgeContent="✓"
                color="secondary"
                overlap="circle"
                invisible={selected !== style}>
              <Avatar
                src={style.photos[0].thumbnail_url}
                alt={style.name}
                className={classes.root}
                onClick={() => selectedStyleHandler(style)}/>
              </Badge>
              </Box>
              </div>
            ))}
          </div>
        </div>)
    } else {
      return (<div>Loading...</div>)
    };
  };

  return (
    <div>
      { ThumbnailRender() }
    </div>
  );
};

export default RelatedStyles;