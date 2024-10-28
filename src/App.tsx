import {Card} from "./components/card"
import "./App.css"


function App() {
  

  return (
    <div className="Container">
      <Card 
        image="https://kochamykoty.pl/wp-content/uploads/2021/10/felinoterapia-terapia-kotem.jpg" 
        title="Felinotherapy" 
        text="While many felines can be calming, therapy cats have been trained to do therapy work, 
        which may include using their natural instincts to provide comfort. 
        Typically, therapy cats are gentle and outgoing. Calmness is also important, 
        as they engage with different kinds of people in varying environments. 
        Felines who startle easily or react to noises or scents might not be ideal for the job."
        link="https://friendsanimals.com/blog/articles/2904-felinotherapy-when-cats-heal"
        />
      <Card
        image="https://api.ngo.pl/media/get/4813?w=640&h=480"
        title="Kynotherapy (Dogotherapy)"
        text="Kynotherapy (Dogotherapy) is a method in rehabilitation with the participation of dogs. 
        The therapy is mainly used when working with children with motor and intellectual disabilities. 
        Contact with a dog evokes extremely positive reactions in children and motivates them to exercise. 
        The dog accompanies the child during gait training, for example, 
        which determines the little patient to make a greater effort."
        link="https://piensosloboazul.com/en-de/blogs/news/terapia-con-perros-que-es-cuales-son-sus-beneficios"
      />
      <Card
      image="https://www.dolphinswim.net/wp-content/uploads/2021/12/KNK_6406-1.jpg"
      title="Dolphin therapy"
      text="Dolphin Assisted Therapy (DAT) is a form of animal‐assisted therapy (AAT) 
      in which children or adults with various conditions interact with or swim with live captive dolphins. 
      DAT is advertised as therapy for a wide range of physical and psychological conditions (e.g., depression, 
      intellectual disabilities, musculoskeletal problems, epilepsy) but is focused mostly on individuals on the autism spectrum."
      link="https://asatonline.org/for-parents/learn-more-about-specific-treatments/dolphin-therapy/"
      />
    </div>
  )
}

export default App