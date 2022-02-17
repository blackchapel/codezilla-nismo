import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Stack from "@mui/material/Stack";
import ShareIcon from '@mui/icons-material/Share';
import { Grow, Typography, Popover, Button } from "@mui/material";
function ImageListing() {
  const itemData = [
    {
      img: "https://api.time.com/wp-content/uploads/2020/12/Anohi-Mita-Hanano-Namaewo-Bokutachiha-Mada-Shiranai_JP_JP_StoryArt.jpg?w=1600&quality=70",
      title: "The sweep by beach",
      author: "usr134",
      content:
        "After Meiko “Menma” Honma died in an accident, a group of six childhood best friends gradually drifted apart. Years later, the ghost of Menma appears to Jinta Yadomi—who used to be the outgoing leader of the group but, since Menma’s death, has isolated himself and barely attends school. Menma asks Jinta to help fulfill her wish—the only way for her to move onto the afterlife. This request becomes the catalyst for Jinta and his friends to reconnect and, perhaps for the first time, process the pain that Menma’s too-early departure left on their lives. Anohana: The Flower We Saw That Day’s genius lies in creating compelling backstories for each of the main characters and artfully weaving their past and present together. The series also illustrates the healing and freedom that can come from deeply examining old scars.",
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: "https://api.time.com/wp-content/uploads/2020/12/shingekiTV_JA_JA_StoryArt.jpg?w=1600&quality=70",
      title: "Bus Stop Visit",
      author: "usr556",
      content:
        "For a hundred years, humanity lived peacefully inside a 50-meter wall (around 165 feet) that protected against humanoid, man-eating giants known as “titans.” That peace is entirely destroyed when an abnormally large titan suddenly appears and breaches the wall, opening the way for the monstrous creatures to flood into civilization. After witnessing his mother’s death, Eren Yeager joins the Scout Regiment—the military branch tasked with battling the titans. Each arc in Attack on Titan moves at full throttle, with hardly a moment to catch your breath. It’s a story of holding onto the will not just to survive, but to live freely. The series also introduces Captain Levi Ackerman, the calm and collected ace of the Scout Regiment who is easily one of the most stan-worthy figures in anime.",
    },
    {
      img: "https://api.time.com/wp-content/uploads/2020/12/Death-Note_ES_LatAm_StoryArt_70204970.jpg?w=1600&quality=70",
      title: "Graden Cleaning",
      author: "usr221",
      content:
        "Light Yagami wants to be a god. After stumbling upon “Death Note”—a notebook that an actual god of death dropped into the human world—the high school student learns that anyone whose name is written in its pages dies. Right away, he begins to scribble the names of criminals in order to create a utopia without evil. It doesn’t take long before international law enforcement organizations start to hunt down whomever is behind the mysterious string of deaths. They partner with a renowned but anonymous detective who goes by “L,” and the story unfolds as Light and L attempt to outwit each other at every turn. Right away, the themes of Death Note are clear: What is justice, and how different are Light’s actions from those of the felons he kills? But beyond the social commentary, the series keeps viewers hooked through the clever schemes Light and L devise to expose the other’s identity while protecting his own.",
    },
    {
      img: "https://staticg.sportskeeda.com/editor/2021/11/f5f57-16379297918281-1920.jpg",
      title: "Side the corners",
      author: "usr898",
      content:
        "The series focuses on Asta, a young orphan who is left to be raised in an orphanage alongside his fellow orphan, Yuno. While everyone is born with the ability to utilize mana in the form of magical power, Asta, with no magic however, instead focuses on physical strength. Conversely, Yuno was born as a prodigy with immense magical power and the talent to control wind magic.Motivated by a desire to become the next Wizard King, an authority figure second to the king of Clover Kingdom, the two youths developed a friendly rivalry. Yuno obtains a legendary four-leaf grimoire held by the kingdom's first Wizard King. The four-leaf grimoire is a rare grimoire, only given to the most immense mages. Asta, despite his lack of magic, obtained a mysterious five-leaf grimoire that contains mysterious elf swords and a bodiless member of the Devil race who utilizes rare anti-magic. Afterward, he and Yuno each join a Magic Knight squad as the first step to fulfill their ambitions.",
      cols: 2,
    },
  ];
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [selectedTitle, setSlectedTitle] = React.useState([]);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Grow
      in={true}
      style={{ transformOrigin: "0 0 0" }}
      {...(2 > 1 ? { timeout: 4000 } : {})}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        <ImageList sx={{ width: 3000, height: 450, backgroundColor: "#1F4910", }}>
          <ImageListItem key="Subheader" cols={2} rows={1}>
            <ListSubheader component="div" sx={{backgroundColor: "#1F4910", marginTop: "7px",}}>
              <Typography variant="h5" color="primary">
                On going events
              </Typography>
            </ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.img} sx={{margin: "20px", }}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                style={{borderRadius: "10px", border: "3px outset #8fd071"}}
              />
              <ImageListItemBar
                title={item.title}
                subtitle={`User: ${item.author}`}
                actionIcon={
                  <>
                    <Button variant="outlined" size="small">
                      Join
                    </Button>
                    <IconButton aria-label="share" color="primary">
                      <ShareIcon />
                    </IconButton>
                    <IconButton
                      color= "primary"
                      aria-label={`info about ${item.title}`}
                      onClick={(e) => {
                        setAnchorEl(e.currentTarget);
                        setSlectedTitle(item);
                      }}
                    >
                      <InfoIcon />
                    </IconButton>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                    >
                      <Typography sx={{ p: 2 }}>
                        {selectedTitle.content}
                      </Typography>
                    </Popover>
                  </>
                }
                sx={{borderRadius: "10px"}}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </Grow>
  );
}

export default ImageListing;
