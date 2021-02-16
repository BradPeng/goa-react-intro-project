import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { videoImageMap } from '../../../../constants/image';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: 'primary',
      fontSize: 22,
      paddingBottom: 10,
    },
    titleBar: {
      maxWidth: 711.09,
      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }),
);

const tileData = [
  {
    img: videoImageMap.typescript,
    title: 'TypeScript Course for Beginners 2020',
    source: 'YouTube',
    link: 'https://www.youtube.com/watch?v=BwuLxPH8IDs',
  },
  {
    img: videoImageMap.react,
    title: "Introduction to The Beginner's Guide to ReactJS on Egghead.io",
    source: 'Egghead',
    link: 'https://www.youtube.com/watch?v=6JMIEhX-r1c&t',
  },
  {
    img: videoImageMap.figma,
    title: 'Figma Tutorial: Developer Handoff',
    source: 'YouTube',
    link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
];

export default function VideoGridList() {
  const classes = useStyles();

  return (
    <Grid item xs={12} spacing={0} className={classes.root}>
      <GridList
        className={classes.gridList}
        cols={1.7}
        cellHeight={400}
        spacing={10}
        style={{ backgroundColor: '#F2F2F2' }}
      >
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <a target="_blank" href={tile.link}>
              <img id="roundCorner" style={{ height: '100%', width: 'auto', padding: 0 }} src={tile.img} alt="" />
            </a>
            <GridListTileBar
              //GridListTileBar can not take "id" as a prop, so use style instead
              style={{ borderRadius: 15 }}
              title={tile.title}
              subtitle={tile.source}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </Grid>
  );
}
