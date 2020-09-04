import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar, IconButton,} from "@material-ui/core"
import ShareIcon from '@material-ui/icons/Share';
import CardMedia from '@material-ui/core/CardMedia';
import CardAction from "@material-ui/core/CardActions"



const CoffeeCard = (props) => {
    const {title,price,description,avatarUrl,imageUrl} = props
    return (
        
          <Card variant="outlined">
              <CardHeader
        avatar={<Avatar src={avatarUrl}/>
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={price}
      />
      <CardMedia style={{height: "300px"}}image={imageUrl}  
      />
      <CardContent>
        <Typography variant="body2" component="p">
         {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      <CardAction>
         <Button>BUY NOW!</Button> 
         <Button>More Offer!</Button> 
      </CardAction>

    </Card>  

    )
}

export default CoffeeCard
