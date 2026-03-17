import { Star, Quote, Zap, ShieldCheck, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface Review {
  name: string;
  country: string;
  date: string;
  text: string;
  rating: number;
  replyDate?: string;
  replyText?: string;
}

const originalReviews = [
  {
    name: "Maria S.",
    country: "Brazil",
    date: "",
    text: "The mnemonic images made everything click! I went from zero to reading menus in Korea in just 3 weeks.",
    rating: 5,
  },
  {
    name: "Jake L.",
    country: "Canada",
    date: "",
    text: "Super patient and creative. The AI visuals for memorizing vocabulary are genius. Highly recommend!",
    rating: 5,
  },
  {
    name: "Yuki T.",
    country: "Japan",
    date: "",
    text: "I tried many tutors but this method is completely different. Fun, effective, and the materials are beautiful.",
    rating: 5,
  },
  {
    name: "Sophie R.",
    country: "France",
    date: "",
    text: "The 1-month crash course prepared me perfectly for my Seoul trip. I could actually have conversations!",
    rating: 5,
  }
];

const reviews: Review[] = [
  {
    name: "Jessica",
    country: "Global",
    date: "February 7, 2026",
    text: "원빈 is such a lovely person to work with 😊 i was genuinely surprised that he still remembered me after we haven’t spoken for two years 😂... Our first lesson went really well — we practiced new expressions 😁 and the conversation felt so natural, like talking to a friend we’ve known for a long time. Highly recommend Wonbin as a tutor ⭐️ I promise you will not regret it🤗 후회 않을거예요 😊😊",
    rating: 5,
    replyDate: "February 28, 2026",
    replyText: "Jessica, thank you so much for the lovely review! 😊 It was such a pleasant surprise to hear from you again! Even though two years have passed, there was no way I could forget you. I’ve always been so impressed by how passionately you live your life and how hard you study—more than anyone I know. Our first lesson back felt so natural... I’m truly rooting for you as you continue to live your 'God-saeng' (갓생) life and work toward your goals. I’ll do my best to make sure every lesson is worth your time and that you never regret it! Thank you again, Jessica! I'm already looking forward to our next conversation :)"
  },
  {
    name: "Zachary",
    country: "Global",
    date: "September 11, 2025",
    text: "Good teacher helps you learn how to speak like a native teacher while also teaching you writing.",
    rating: 5,
    replyDate: "October 6, 2025",
    replyText: "Thank you, Zachary! I can clearly see how much your Korean has improved. Even with your busy schedule, you’ve been consistent and thoughtful in your learning. You always approach Korean logically and try to apply what you’ve learned in real situations, which is why your progress is so noticeable. I really appreciate your effort and positive attitude every class. Keep it up!"
  },
  {
    name: "Leila",
    country: "Global",
    date: "September 4, 2025",
    text: "Wonbin is one of the best teachers that I had. Very professional, created a program adapted to my needs, pedagogic and very prepared everytime we have a lesson ( Im the one not always prepared :)) He's friendly, respectful and ensure that our lessons are fun cool and productive. I highly recommend him and i'm sure that you will be surprised how quickly you progress with him, he's the best teacher for you.",
    rating: 5,
    replyDate: "October 6, 2025",
    replyText: "Thank you, Leila! You’re one of the most inspiring students I’ve met. Even with your busy schedule, you always find time to study and even try to use Korean in real life. I really admire your attitude and curiosity. You’re not just memorizing but truly trying to understand the logic behind the language. I’m also glad that you enjoy the little memory tricks and “cheat codes” I share haha. I’ve learned a lot from your dedication too :)"
  },
  {
    name: "Luce",
    country: "Global",
    date: "July 30, 2025",
    text: "I have been studying Korean with Wonbin for a year and a half. It has been a very enriching experience. He is capable of customizing and adapting our classes based on my needs. He is very engaging, knowledgeable and flexible. He is also very encouraging and positive.",
    rating: 5,
    replyDate: "October 6, 2025",
    replyText: "Thank you so much, Luce! It’s been amazing to see how your short-term goal turned into a real love for the Korean language and culture. I’m really impressed by your steady effort and how much you’ve grown. You’ve become one of the most consistent learners I’ve taught! I hope you have a wonderful trip to Korea and don’t forget too much of what you’ve learned haha. Enjoy every moment and see you again soon!"
  },
  {
    name: "Cynthia",
    country: "Global",
    date: "July 26, 2025",
    text: "Wobin has been tutoring my son for several months. My son is currently learning Korean in his dual language school, but he has struggled transitioning from memorizing vocabulary to speaking and conversing in Korean... Wobin makes every lesson fun and engaging. My son looks forward to speaking with Wobin every week. Wobin goes above and beyond to find out what excites the kids, then uses that to encourage them to speak about it in Korean... I strongly recommend Wobin for your kids. He's patient, kind, and engaging. He makes learning Korean fun and gives kids the confidence they need to get out there and try.",
    rating: 5,
    replyDate: "July 26, 2025",
    replyText: "Hi Cynthia, I’m so grateful for your thoughtful review — thank you! It’s been such a joy working with your son. He’s smart, curious, and brings so much personality to each lesson. I’m especially happy to hear he’s feeling more confident about speaking Korean — that’s what it’s all about! My goal is always to make language learning fun, meaningful, and empowering, and I’m so glad that’s showing through. I’ll keep doing my best to support his growth and help him feel more at ease expressing himself. Let’s keep going strong! 💪😊"
  },
  {
    name: "Brett",
    country: "Global",
    date: "July 25, 2025",
    text: "Wonbin is a patient, funny, and attentive teacher. He is always well-prepared for our lessons, develops customized materials tailored to my interests, and is attentive and engaged. I always look forward to weekly lessons with him!",
    rating: 5,
    replyDate: "July 26, 2025",
    replyText: "Hi Brett, Thank you so much for your kind words! It truly means a lot to know you're enjoying our lessons and finding value in them. I always look forward to our sessions too — your curiosity, consistency, and positive attitude make teaching so enjoyable! I'll keep doing my best to create lessons that are engaging and tailored to your goals. Let’s keep it up and continue making steady progress together. 감사합니다! 🙌"
  },
  {
    name: "Tingyun",
    country: "Global",
    date: "March 31, 2025",
    text: "Had one class so far. Didn't expect to learn so much but in an amusing way. soft-spoken and patient. Appears to be passionate about his work ^^",
    rating: 5,
    replyDate: "April 1, 2025",
    replyText: "Glad to hear you enjoyed the class :) I try to make learning both fun and meaningful. Looking forward to our next lesson! 🚀"
  },
  {
    name: "Easton",
    country: "Global",
    date: "February 23, 2025",
    text: "Amazing teacher! Lessons were extremely entertaining and informative. Such a friendly and patient teacher, you feel like you're being taught by a friend who's a master of his work. 6/5 would recommend.",
    rating: 5,
    replyDate: "February 24, 2025",
    replyText: "Thanks so much, Easton! That means a lot. You were like a sponge, absorbing so much in just one day—seriously impressive. I can already tell that if you keep up this steady effort, you’ll not only grow endlessly but also make amazing memories while living in Korea. Looking forward to seeing your progress! :^)"
  },
  {
    name: "Carrie",
    country: "Global",
    date: "February 18, 2025",
    text: "I really enjoy Wonbin 선생님‘s lessons! He makes everything very fun, even topics that would otherwise be tedious. He is very creative, and great with helping to memorize things. He has a lot of great materials that he uses too. He’s super friendly!",
    rating: 5,
    replyDate: "February 18, 2025",
    replyText: "Carrie, your progress in Korean has been truly impressive! Your ability to absorb and apply new concepts so quickly is amazing. I can really see how much effort you put into learning, and it’s paying off! Thank you so much for your kind words—I’m really grateful to have such a dedicated and enthusiastic student like you. Let’s keep making learning fun together! 😊"
  },
  {
    name: "Holly",
    country: "Global",
    date: "February 2, 2025",
    text: "I had my first lesson with Wonbin and he is a great tutor! He made the lesson very fun and I learnt a lot, I would definitely recommend him - Thanks Wonbin!! :)",
    rating: 5,
    replyDate: "February 11, 2025",
    replyText: "Holly!! Thank you so much for the kind words! I'm really glad you enjoyed the lesson and found it helpful. It was great working with you, and I'm looking forward to our next session! See you soon! :)"
  },
  {
    name: "Matthew",
    country: "Global",
    date: "February 2, 2025",
    text: "Excellent tutor, very patient and give tips and suggestions when learning which is most welcome. Wonbin helps make learning a new language a lot less daunting.",
    rating: 5,
    replyDate: "February 2, 2025",
    replyText: "Thank you so much, Matthew! I really appreciate your kind words. I'm glad to hear that the lessons feel less daunting for you—that's exactly what I aim for! I also think it’s truly amazing that you're learning Korean with the goal of coming to Korea. Your dedication is inspiring! I'll make sure to tailor our lessons to help you feel even more prepared for hiking, walking, and all the things you want to experience here. Looking forward to our next lesson! 😊"
  },
  {
    name: "Shirley",
    country: "Global",
    date: "December 29, 2024",
    text: "Wonbin has a passion for teaching. He is patient, kind and encouraging. If you are lucky enough to become his student, he will do everything he can to make your lessons fun and enjoyable. I am hard to teach but he has supported me in continuing lessons. He will do the same for you. I highly recommend him to other students. You won't find a more charming tutor anywhere.",
    rating: 5,
    replyDate: "January 8, 2025",
    replyText: "I truly appreciate your thoughtful review. Hearing about your reasons for learning Korean really touched me and inspires me to teach with even more passion. Thank you for your warm thoughts about Korea, and I’m so glad to be a part of your learning journey. Let’s continue working toward your goals together :)"
  },
  {
    name: "Ryan",
    country: "Global",
    date: "November 2, 2024",
    text: "Wonbin is an amazing teacher! I highly recommend. He's great at meeting you where you are at, and makes the lessons fun and engaging.",
    rating: 5,
    replyDate: "January 8, 2025",
    replyText: "Thank you so much for your kind words! I’m so glad to hear that you’re enjoying our lessons. I hope that as your Korean improves, you’ll be able to have even more meaningful conversations with your family and strengthen your relationships. Keep up the great work—I’m cheering for you every step of the way🔥"
  },
  {
    name: "Marne",
    country: "Global",
    date: "September 22, 2024",
    text: "Outstanding Tutor! I am a middle aged introverted, \"non-traditional\" student. I have studied several different languages, taken various courses and tried out a few tutors. Wonbin Wins! I really appreciate his teaching style. He is always prepared, has practical lessons and he is so patient and encouraging with me. He is tailoring my lessons to prepare me with useful phrases for my upcoming trip to Korea. If you are on the fence, just do it! You will love Wonbin!",
    rating: 5,
    replyDate: "September 23, 2024",
    replyText: "Omg Marne!Thank you so much for your wonderful review☺️ I truly admire your determination to learn Korean and how dedicated you are to preparing for your trip. Your preparation before each lesson, especially looking up phrases you want to use, shows such a strong commitment to the learning process. It’s inspiring! I know you’ll have an incredible time in Korea, and I hope you challenge yourself to use as much Korean as you can while you’re there. And don’t stop once your trip is over—keep going, and I’m sure you’ll find even more joy in learning the language. I’m excited to continue this journey with you!"
  },
  {
    name: "Maiia",
    country: "Global",
    date: "September 22, 2024",
    text: "Wonbin is a great tutor who will help you learn Korean fast and in a fun way, whether it's slang or grammar... By studying with him, you will learn phrases that are actually used regularly in South Korea. It's only my 5th lesson with him, but I already feel like I've improved a lot... He takes lessons with great responsibility, always coming on time and being prepared. The best part is he customizes each lesson to your goals, skills, and interests; so in lessons, you always discuss things that interest you... Lastly, he is patient and understanding. Highly recommend !",
    rating: 5,
    replyDate: "September 23, 2024",
    replyText: "Wow, Maiia, thank you for such a detailed and thoughtful review🥹 I’m so happy to hear that the lessons have been both fun and helpful for you, and I’m thrilled to see how quickly you’re progressing. Your enthusiasm and genuine curiosity about the language always make teaching so enjoyable, and your pronunciation and ability to pick up phrases have been nothing short of impressive. I’m confident you’ll continue to improve at an incredible pace, and I can’t wait to see how fluent you’ll become in such a short time. Keep asking those great questions and challenging yourself—you’re on an amazing path! 항상 응원해요☘️"
  },
  {
    name: "Ernest",
    country: "Global",
    date: "September 12, 2024",
    text: "Always prepared for lessons and has clear and fun lesson plans! Lots of chance to practice speaking which is my main goal.",
    rating: 5,
    replyDate: "September 23, 2024",
    replyText: "Ernest!! Thank you for your kind words!😊 I’ve been really impressed by how well you review and retain everything despite how busy you are. The curiosity and thoughtful questions you bring to class really stand out, and it shows that you’re not just learning the language—you’re really thinking deeply about it. Keep practicing what you’ve learned in your daily life, and I’m sure your Korean will continue to improve quickly. You’re doing an amazing job, and I’m excited to keep helping you on your journey! 화이팅이에요💪🏻"
  },
  {
    name: "Josh",
    country: "Global",
    date: "September 8, 2024",
    text: "Wonbin is a very insightful/fun tutor. He was better than my Korean college professor. I learned so much with Wonbin.",
    rating: 5,
    replyDate: "September 23, 2024",
    replyText: "Haha Thank you so much, Josh!😂 Your dedication to learning Korean while serving in the military is truly inspiring. It’s incredible how you manage to stay so focused and committed to improving your language skills despite your demanding schedule. I’m really grateful for your service and how you always come prepared with questions—please keep doing that! It makes the lessons so engaging and meaningful. I’m really impressed with how much you’ve already learned, and I look forward to helping you reach even greater heights in Korean!😁"
  },
  {
    name: "Mélanie",
    country: "Global",
    date: "September 1, 2024",
    text: "원빈샘 is really a great teacher! Don't miss a chance to learn korean with him! I feel like my korean improved a lot with only a couple of lessons! He is well prepared and he personalized each lesson. He is also very patient. Hopefully, I'll have the opportunity to take more lessons with this exceptional tutor in the future!",
    rating: 5,
    replyDate: "September 1, 2024",
    replyText: "Hi Mélanie! Thank you so much for the kind review! It was so great having you in class, and I’m really glad to hear that you noticed a big improvement in your Korean. You were already doing well, but seeing your progress during our time together was truly rewarding. I loved how you became even more interested in Korea and started exploring other activities related to it. That made me really happy! I also want to give you credit for how committed you were during our lessons. Your hard work and positive attitude really paid off, and it made our sessions enjoyable. I’m sure you’ll continue to make amazing progress with your Korean. Keep up the great work, and I hope you stay curious about Korean culture. If you ever want to pick up more lessons in the future, I’d love to catch up and see how far you’ve come. Wishing you all the best, and thanks again for being such an awesome student! Warm regards, Wonbin"
  },
  {
    name: "Anita",
    country: "Global",
    date: "August 28, 2024",
    text: "원빈 쌤 is an excellent tutor. I love his lessons a lot. He was well prepared, the structure of each lesson was designed to be exciting, also could start engaging and deep conversation. I have been learning Korean a lot from him, and his attitude, encouraging spirit helped me a lot to be more confident in speaking Korean. I loved that he added useful and interesting cultural context. As a beginner I have some difficulties to understand or to speak Korean, but he had much patience and flexibility to help me through these hard times also was open to understand my mixed English-Korean sentences. I highly recommend him as he has a kind, supportive and humble personality. Would rejoin his class anytime.",
    rating: 5,
    replyDate: "September 1, 2024",
    replyText: "안녕하세요 Anita! Thank you so much for your lovely review! It’s been such a pleasure to have you in class, and I'm really happy to hear that you felt your Korean skills improved so much. You already had a solid foundation, but watching your progress during our lessons was amazing. I could see how much effort you put into every session, and it’s great to know that you're even more interested in Korean culture now. I’m especially proud of how you embraced new challenges and stayed motivated, even when things got tough. It really showed your dedication! Your enthusiasm made our lessons so much fun, and I’m glad we could dive into some deeper conversations too. It would be wonderful if you keep going with your Korean studies and continue to explore more about Korea. You’ve got so much potential, and I know you’ll do great. Thanks again for being such a fantastic student. Wishing you all the best in everything! Take care, Wonbin :^)"
  },
  {
    name: "Sarah",
    country: "Global",
    date: "August 17, 2024",
    text: "I just wanted to thank you for your wonderful lessons, which you have prepared with so much love and time. I personally find the way you approach and act out natural conversations very useful and fun! I feel very comfortable with you in class. So I will probably be very sad when our lessons are over soon because it feels like losing a good friend. I wish you the best of luck with everything you wish for :)",
    rating: 5,
    replyDate: "August 18, 2024",
    replyText: "Sarah!!😁 Thank you so much for your kind words. It has been an absolute pleasure having you in class, and I have truly enjoyed every moment we've spent together. Your dedication and determination to always give your best have been truly inspiring. I especially loved how your unique and thoughtful responses added an extra layer of fun and creativity to our lessons, making them even more enjoyable for both of us. As we approach the end of our time together, I just want to encourage you to continue your Korean studies with the same passion and commitment you've shown so far. I know you’ll keep making great progress! Wishing you all the best in everything you do, and I hope our paths cross again in the future. 저랑 수업해줘서 정말 고마워요! :^)"
  },
  {
    name: "Elena",
    country: "Global",
    date: "August 9, 2024",
    text: "he.is.funny.and.friendly.and.he.always.make.me.fell.that.I.can.do.more.than.I.think.I.can. Thank.you.Mr.Wonbin!!!",
    rating: 5,
    replyDate: "August 11, 2024",
    replyText: "Thank you, Eleni! Your words mean a lot to me. I'm so glad that our lessons help you feel confident and capable. You're doing amazing, and it's been a joy to see you challenge yourself and achieve more each day. Keep believing in yourself, and remember that you can always do more than you think you can. I'm proud of your progress and excited to continue working together! 엘레나 화이팅!! ㅎㅎ"
  },
  {
    name: "Louisa",
    country: "Global",
    date: "August 9, 2024",
    text: "Wonbin is the best language tutor I've had! I'm very shy with new people, introverted, and easily frustrated, making most tutoring hard for me. He's extremely patient and engaging which helps get me out of my shell. Not to mention his friendliness is off the charts! I'd love for him to have been a teacher I had back in grade school!",
    rating: 5,
    replyDate: "August 11, 2024",
    replyText: "Thank you so much for your kind words, Louisa! It has been an absolute pleasure working with you. Your enthusiasm and positive attitude make our lessons enjoyable and productive. I'm truly grateful for your dedication and openness during our sessions. It’s students like you who make teaching such a rewarding experience. Keep up the great work, and I’m looking forward to seeing you continue to grow and succeed! 고마워요 루이자~!! :^)"
  },
  {
    name: "Juan",
    country: "Global",
    date: "August 4, 2024",
    text: "Wonbin 쌤 is an excellent teacher and his lessons are quite insightful. I have been learning Korean for some time, and his lessons supplement my current knowledge and add so much more cultural context I did not have before. His feedback is extremely helpful and he is always prepared for class. His engaging and enthusiastic approach makes the lessons run smoothly without letting them become tiresome. I highly recommend him to other individuals who want to learn Korean in a more comfortable environment.",
    rating: 5,
    replyDate: "August 4, 2024",
    replyText: "Omg Juan!! Thank you so much for your heartfelt review☺ I was truly touched by your kind words. It's been evident from our classes that you have a strong passion for learning Korean and Korean culture, and I've always been impressed by how quickly you grasp new concepts. Reading such a wonderful review gives me great motivation and inspires me to continue working hard and preparing for our lessons. 정말 고마워요🙂 우리 앞으로도 화이팅 해요!🔥👊🏻"
  },
  {
    name: "Marcus",
    country: "Global",
    date: "August 4, 2024",
    text: "Wonbin is a really engaging teacher! It's only my first lesson, but I had lots of fun and I learned a lot of new phrases. The lesson was tailored towards me and helped me understand what I was in for for my future lessons. 원빈쌤, 감싸합니다!",
    rating: 5,
    replyDate: "August 6, 2024",
    replyText: "안녕하세요 Marcus!! Thank you so much for the warm review☺ Just as you are interested in Korea, your passion is also incredible, and your ability to learn is excellent. I'm happy that you like Korea, and I hope you continue studying Korean diligently so you can enjoy your hobbies even more. You can definitely do it. Cheering for your dreams, 원빈쌤이 :^)"
  },
  {
    name: "Tim",
    country: "Global",
    date: "August 1, 2024",
    text: "His lessons are really good. He responds to questions and listens to you. Additionally, you quickly feel comfortable because he is very friendly and funny. It's really fun to learn with him. You won't regret having lessons with him. ^^",
    rating: 5,
    replyDate: "August 1, 2024",
    replyText: "Tim!!! Thank you so much for your kind words and thoughtful review! I'm really glad to hear that you enjoy the lessons and feel comfortable learning with me. It's always a pleasure to see your enthusiasm and strong desire to learn. Your dedication makes teaching even more enjoyable. Thanks again for the great feedback, and I look forward to our future lessons! 고마워요 우리 앞으로도 화이팅 :^) Best, 원빈쌤😀"
  },
  {
    name: "Ana",
    country: "Global",
    date: "July 30, 2024",
    text: "Wonbin is an amazing teacher. He's incredibly attentive, dedicated, and kind. Right from the start, he tailors the class to you, even creating an avatar of you for his presentation based on your interests. He spends at least two hours preparing each lesson, which really shows and is much appreciated. His personality and teaching style make the classes both enjoyable and informative. Time flies by, and you always end up wanting to learn more. Highly recommended! 원빈쌤 정말 감사합니다. 수고 많으셨습니다!!🥰",
    rating: 5,
    replyDate: "August 1, 2024",
    replyText: "Ana!! Thank you so much for your heartfelt review. 고마워요 :^) I’m deeply touched by your kind words and the effort you put into sharing your experience. It means a lot to know that my dedication and teaching style have made a positive impact on your learning journey. Your enthusiasm and willingness to learn make teaching truly rewarding for me. I can see how much effort you put into the lessons, always asking questions and staying focused. Your curiosity and eagerness to learn are definitely going to help you improve your Korean skills quickly. Keep up the great work! Looking forward to our next class! 아나도 고생 많았어요~ :)"
  },
  {
    name: "Cherriie",
    country: "Global",
    date: "July 28, 2024",
    text: "Firstly, I'm so surprised by how thoughtful and well-prepared Won Bin is. In our first trial class, he created a fantastic presentation and document tailored to my interests, even created an avatar for me. He was very attentive during our conversation and helped me correct my Korean. His teaching approach is clear, fun, engaging, and incredibly helpful, perfectly aligned with my goals. He didn't rely solely on textbooks but personalized lessons for practical everyday use. He's been punctual since the first class. We encountered some server issues during the class, but he tried his best to deliver the class until the end, even extending the lesson time. His kind personality makes me feel comfortable and relaxed throughout our classes. I'd be crazy not to continue studying with him. I highly recommend Won Bin as an excellent Korean teacher. Absolutely beyond 5 stars!🌟👏🏻 감사해요 쌤! 다음에 봐용~",
    rating: 5,
    replyDate: "July 28, 2024",
    replyText: "Cherriie!! I'm so touched🥹😭 Reading the review gave me strength and motivation to work even harder! Your ability to speak naturally like a native Korean and your strong desire to learn anything are amazing. If we practice and learn the expressions commonly used in Korea together, your skills will improve quickly. You seem to be familiar with many expressions already, probably because you hear a lot of Korean through dramas. You quickly catch the nuances of new phrases and use them well. Cherrriie in top🍒!ㅎㅎ Let's work together to make your Korean skills top-notch. Thank you so much once again 🥰다음에 봐요~~!"
  },
  {
    name: "Ben",
    country: "Global",
    date: "July 26, 2024",
    text: "This was my first class with Wonbin after our trial class and it was as great as I expected. He is very kind and patient and helps me a lot to improve my confidence. He is well prepared for the class with great material. I enjoy the classes a lot and I want to keep going!",
    rating: 5,
    replyDate: "July 26, 2024",
    replyText: "Oh, thank you sooooo much Ben!!😁 I'm really surprised that you still remember Korean so well despite it being a long time since you started learning. Your reading skills are already quite good, so if you focus on learning words you use often, it will not only make it easier to remember but also make speaking more fun. Thank you for trusting me and taking lessons with me. Honestly, time flew by today too😂 Let's do our best in the next lesson as well! 화이팅🔥🔥"
  },
  {
    name: "samantha",
    country: "Global",
    date: "July 22, 2024",
    text: "WOOOOOOOOOOOOOOOO 원빈쌤 is an exceptional tutor!☻ I was initially nervous about booking the trial lesson because 쌤 was new, and I'd be the first student but he far surpassed my expectations! ! ! He provided a tailored presentation and document just for me (complete with my own avatar!) ☃ and gave an in-depth discussion of the course ahead. His explanations are clear, and he uses a variety of resources to keep the lessons engaging. 원빈쌤 is also lively and a great conversationalist. Learning with him feels like studying with an older brother! ☆☆ Despite my limited vocabulary, he is very patient and makes me feel at ease. His patience and encouragement have significantly boosted my confidence in speaking. ❀❀ Additionally, his proficiency in English ensures nothing gets lost in translation. I have no doubt that soon his schedule would be packed with students! I highly recommend 원빈쌤! ^__^",
    rating: 5,
    replyDate: "July 22, 2024",
    replyText: "Samantha!!!! Thank you so much for leaving such a great review🥰. Above all, I was amazed at how much you already knew about Korea. (At some points, I thought you were already Korean😂) You're so good at English and you learn new things so quickly. Thanks to the smart and talented Samantha, I thoroughly enjoyed our lessons without even noticing the time pass. I guarantee you will become an amazing person👏🏻 So, keep 파이팅🔥!! -사만다를 응원하는 원빈쌤이🤓-"
  }
];

export default function ReviewsSection() {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedReview) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedReview]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll-fast factor
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <section id="reviews" className="py-32 bg-[#FDFCF8] relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-[10px] font-black uppercase tracking-[0.3em]"
          >
            <ShieldCheck size={14} />
            Verified Success Metrics
          </motion.div>
          <h2 className="text-4xl sm:text-7xl font-black text-foreground tracking-tighter leading-[0.85]">
            Trusted by the <br />
            <span className="text-secondary italic">Global Community.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto leading-relaxed">
            Performance data from global operators who have successfully integrated the Wonbin Ssem framework into their learning roadmap.
          </p>
        </div>

        {/* Auto-scrolling Original Reviews */}
        <div className="relative w-full max-w-[100vw] overflow-hidden mb-20">
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#FDFCF8] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#FDFCF8] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 w-max"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {[...originalReviews, ...originalReviews].map((review, i) => (
              <div
                key={`orig-${i}`}
                className="w-[350px] shrink-0 group bg-white rounded-[3rem] p-10 border border-gray-100 shadow-xl shadow-gray-200/20 hover:border-secondary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden relative gpu-accelerated"
              >
                <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                  <Quote size={80} />
                </div>

                <div className="relative space-y-6">
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} size={14} className="fill-secondary text-secondary" />
                    ))}
                  </div>

                  <p className="text-lg text-foreground font-medium leading-relaxed italic">
                    "{review.text}"
                  </p>

                  <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-black text-foreground uppercase tracking-tight">{review.name}</p>
                      <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{review.country}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <Zap size={14} fill="currentColor" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Draggable Actual Student Reviews */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h3 className="text-2xl sm:text-4xl font-black text-foreground tracking-tighter">
            Real Stories, <span className="text-secondary italic">Real Progression.</span>
          </h3>
          <p className="text-sm text-muted-foreground font-medium flex items-center justify-center gap-2">
            &#8592; Swipe or drag to read full conversations &#8594;
          </p>
        </div>

        <div className="relative w-full overflow-hidden px-4 md:px-0" ref={containerRef}>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-12 pt-4 px-4 scroll-smooth hide-scrollbar cursor-grab active:cursor-grabbing snap-x snap-mandatory md:snap-none"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="md:w-[50vw] shrink-0" /> {/* Spacer for centering on large screens initially if needed, optional */}
            {reviews.map((review, i) => (
              <div
                key={`student-${i}`}
                onClick={(e) => {
                  // Prevent click if we were dragging
                  if (isDragging) {
                    e.preventDefault();
                    return;
                  }
                  setSelectedReview(review);
                }}
                className="w-[320px] md:w-[400px] shrink-0 snap-center group bg-white rounded-[2rem] p-8 border border-primary/10 shadow-lg shadow-primary/5 hover:border-primary/30 hover:shadow-xl transition-all duration-300 relative gpu-accelerated select-none"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Quote size={60} />
                </div>

                <div className="relative space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star key={j} size={12} className="fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{review.date}</span>
                  </div>

                  <p className="text-base text-foreground/80 font-medium leading-relaxed line-clamp-4 min-h-[100px]">
                    "{review.text}"
                  </p>

                  <div className="pt-5 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        {review.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">{review.name}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Student</p>
                      </div>
                    </div>

                    {review.replyText && (
                      <div className="flex items-center gap-1 text-[10px] font-bold text-primary bg-primary/5 px-2 py-1 rounded-full uppercase tracking-wider">
                        Wonbin Replied <ChevronRight size={12} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="w-[10vw] shrink-0" /> {/* End spacer */}
          </div>
        </div>

        {/* Global Feedback Badge */}
        <div className="mt-20 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-gray-100 shadow-sm text-xs font-bold text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Live Feedback Integration Active
          </div>
        </div>
      </div>

      {/* Review Details Modal */}
      <AnimatePresence>
        {selectedReview && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedReview(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[600px] max-h-[85vh] bg-white rounded-[2rem] shadow-2xl z-10 flex flex-col overflow-hidden gpu-accelerated"
            >
              {/* Sticky Header with Close Button */}
              <div className="shrink-0 p-6 flex justify-between items-center border-b border-gray-100 bg-white sticky top-0 z-20">
                <h3 className="font-black text-lg text-foreground">Review Details</h3>
                <button
                  onClick={() => setSelectedReview(null)}
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-muted-foreground hover:bg-gray-100 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div
                className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 overscroll-contain"
                style={{
                  WebkitOverflowScrolling: 'touch',
                  scrollbarWidth: 'thin', /* ensure scrollbar shows down the trackpad */
                }}
              >
                {/* Student Review */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-black text-xl shrink-0">
                      {selectedReview.name[0]}
                    </div>
                    <div>
                      <h4 className="font-black text-foreground">{selectedReview.name}</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {Array.from({ length: selectedReview.rating }).map((_, j) => (
                            <Star key={j} size={12} className="fill-secondary text-secondary" />
                          ))}
                        </div>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{selectedReview.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl relative">
                    <Quote size={24} className="text-gray-200 absolute top-4 right-4" />
                    <p className="text-foreground/80 leading-relaxed text-sm whitespace-pre-line relative z-10">
                      {selectedReview.text}
                    </p>
                  </div>
                </div>

                {/* Tutor Reply */}
                {selectedReview.replyText && (
                  <div className="space-y-4 border-l-2 border-secondary/20 pl-4 sm:pl-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <img src="/logo-ws.png" alt="Wonbin" className="w-5 h-5 object-contain" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-foreground">Wonbin</h4>
                        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{selectedReview.replyDate}</span>
                      </div>
                    </div>
                    <div className="bg-secondary/5 p-5 rounded-2xl rounded-tl-none border border-secondary/10 relative">
                      <Zap size={16} className="text-secondary/20 absolute top-4 right-4" />
                      <p className="text-foreground/80 leading-relaxed text-sm whitespace-pre-line relative z-10">
                        {selectedReview.replyText}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
