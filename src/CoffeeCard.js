import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import { Avatar, CardMedia, IconButton } from '@material-ui/core';





function CoffeeCard(props) {

  const { avatarSrc, title, subtitle, description, imgSrc} = props;

  return (
    <Card>
        <CardHeader
        avatar={
          <Avatar  src={avatarSrc}/> 
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      
      <CardMedia
        style={ {height: "150px"}  }
        image = {imgSrc}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" component="p">
            {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Buy Now</Button>
        <Button size="small" color="secondary">Offers</Button>
      </CardActions>
    </Card>
  );
}

export default CoffeeCard;