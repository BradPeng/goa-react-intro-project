import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { arrayImageMap } from '../../../../constants/image';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    marginBottom: 50,
  },
  media: {
    height: 309,
  },
});

const ArrayFunctionList = [
  {
    img: arrayImageMap.map,
    name: 'map',
    subtitle: 'Returns a new array',
    description:
      'The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
  },
  {
    img: arrayImageMap.filter,
    name: 'filter',
    subtitle: 'Returns a new array',
    description:
      'The filter() method creates a new array with all elements that pass the test implemented by the provided function',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
  },
  {
    img: arrayImageMap.slice,
    name: 'slice',
    subtitle: 'Returns a new array',
    description: 'The slice() method returns a shallow copy of a portion of an array into a new array object selected',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
  },
];

export default function Language_Card() {
  const classes = useStyles();

  return (
    <Grid container justify="space-between" spacing={2} direction="row" alignItems="center">
      <Grid item xs={12}>
        <Grid container justify="space-between" spacing={1} direction="row" alignItems="center">
          {ArrayFunctionList.map((element) => (
            <Grid item>
              <div>
                <a target="_blank" href={element.link}>
                  <Grid container spacing={0}>
                    <Card className={classes.root} variant="outlined" style={{ marginRight: 8 }} id="roundCorner">
                      <CardActionArea>
                        {/* Card Image */}
                        <Grid item xs={12}>
                          <CardMedia className={classes.media} image={element.img} title={element.name} />
                        </Grid>
                        {/* Card Text and Button */}
                        <Grid item xs={12}>
                          <CardContent>
                            <Grid container spacing={2}>
                              <Grid item xs={12}>
                                <Grid container spacing={0}>
                                  <Grid item xs={12}>
                                    <Typography gutterBottom variant="h4" component="h2">
                                      {element.name}
                                    </Typography>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Typography variant="body1" color="textSecondary" component="p">
                                      {element.subtitle}
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Grid item xs={12}>
                                <Typography variant="body1" color="textSecondary" component="p" style={{ height: 70 }}>
                                  {element.description}
                                </Typography>
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Grid>
                      </CardActionArea>
                      <Grid item xs={12}>
                        <CardActions>
                          <Grid container spacing={0}>
                            <Grid item xs={12}>
                              <Button size="medium" style={{ marginTop: 10, marginBottom: 10, color: '#1776D2' }}>
                                Read More
                              </Button>
                            </Grid>
                          </Grid>
                        </CardActions>
                      </Grid>
                    </Card>
                  </Grid>
                </a>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
