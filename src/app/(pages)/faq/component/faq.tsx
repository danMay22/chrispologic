import { Badge } from '@/components/ui/badge';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface Faq3Props {
  heading: string;
  description: string;
  items?: FaqItem[];
  supportHeading: string;
  supportDescription: string;
  supportButtonText: string;
  supportButtonUrl: string;
}

const faqItems = [
  {
    id: 1,
    title: 'Should one attend church? ',
    details:
      "Most definitely. In the Bible there is a correlation between one's spiritual commitment to God and church fellowship. The Bible says we should 'not' neglect the gathering of saints like some have (Hebrews 10:25). This means that some during the early church had the unfortunate tendency of skipping or abandoning church fellowship. One cannot say, 'I abandoned church, but not God'. The church was put by God as a system of accountability for the believer and other believers (Galatians 6:1; 1 Corinthians 16:2; 1 Corinthians 12:13). The Bible describes the coming together of believers like oil flowing down Aaron the priest's beard to the bottom of his robe (Psalms 133:1-3). The gathering of believers is like log put together in a fire. A single log cannot burn alone. The strategy of Satan is to always remove them from a local church or gathering in order to put out their spiritual fire.",
  },
  {
    id: 2,
    question: 'Which day should Christians use as a day for church gathering?',
    answer:
      "In the Old Testament, the Sabbath (Saturday) was designated for church gathering (Deuteronomy 5:14; Exodus 31:14). The Old Testament believer was required to keep the Sabbath day religiously, if not, face death. Jesus came, made it clear that He was the Lord of the Sabbath (Mark 2:27-28), signifying that Christianity wasn't about religiously keeping one day but all days for the Lord. Colossians 2:16 makes it clear that not observing the Sabbath (Saturday worship) should not be condemnation for the New Testament believer. The early church Christians then went on to meet on Sundays, which is the 1st day of the week (1 Corinthians 16:2; Matthew 28:11; Acts 20:7) according to Jewish tradition, and that has been a pattern for the church to date. So Sunday through the teaching of the apostles became the day for Christian gathering, not by law or legalism, but by grace.",
  },
  {
    id: 3,
    question: 'What does the Bible say about honoring parents?',
    answer:
      "The Bible says we should honor parents, for that leads to long life (Ephesians 6:2-3) Such leads to a blessing upon one. However, verses shouldn't be read in isolation. Scripture should be interpreted in chapters or the whole book. If read in isolation, some parents could use the above mentioned verse to guilt trip or manipulate their children. Whilst the child has the responsibility to honor their parent, the parent has a responsibility not to provoke their child (Ephesians 6:4)",
  },
  {
    id: 4,
    question: 'Should the modern day Christian tithe?',
    answer:
      "It is important to approach the concept of tithing as a 'principle' for the believer 'not a command' for the believer. There definitely is no direct Scripture in the New Testament that commands the New Testament believer to tithe, but that does not rule out the Old Testament promises and principles locked in the tithe. God's promises of blessing (Malachi 3:10) locked in tithing are still much alive for the New Testament believer. Tithing is a powerful biblical principle that was there even before the Law of Moses (Genesis 14:19-20; Genesis 28:20-23), making the tithe not the Law, but principle. Tithing is a principle for honoring God. The carnal person sees their income as their own sweat. The carnal mind is about receiving, keeping or eating everything. But the believer's mind sees all one has as coming from the Lord. The believer's mind seeks to honor God for what He has provided.  Deuteronomy 8:18 say, 'Remember the Lord your God, for it is He that gives you power to make wealth'. If we understand that the believer in the mordern day is still bound to honoring God through their wealth (Proverbs 3:9), we will not argue about the tithe. God gives us 100 percent provision, and out of the 100, He says, 'Reserve 10% for me, then keep the rest of the 90% for yourself' (Leviticus 27:30). Jesus does speak about tithing in the New Testament, says whilst the worshipper should practice tithing, they should not negligent the more important matters of the faith, which are justice, mercy and faithfulness (Matthew 23:23). Yes, that was not a direct command from Jesus for one to tithe, but Jesus still didn't speak against tithing. If tithing was wrong, Jesus would have said so. When we tithe, we now tithe not from compulsion or legalism, but out of grace and gratitude. The Bible says we should not give out of compulsion (2 Corinthians 9:7). When we understand how much God has been good to us, setting aside a 10th for the Lord becomes no issue. Actually the New Testament believer realizes they are not limited to giving 10% of their income; they can give 20%, 30%, anything beyond. This doesn't mean that one should be forced to tithe even when they be in debt. One could still commit to a certain amount to give from their income. It could be 5% of their income, for an example. The key is COMMITMENT. As time goes, one can grow into the 10%. There will always be arguments against tithing, but one thing we cannot argue about is that there is power in commitment; there is a sense of spiritual maturity in a believer who gives in a committed form than with one who gives casually. Where should the tithe go? To the charity or to church? Scripture is clear, to the temple, church (Malachi 3:10); so that temple needs are met. Without a shadow of doubt, a church that has believers who tithe will never run short of supply. Temple needs are met without a sweat.",
  },
  {
    id: 5,
    question: 'Will God punish people with hell fire?',
    answer:
      "Some say 'God is a good and gracious God, therefore he cannot punish people with fire'. Well He did punish people with water (a flood), the majority wicked died during the flood (Genesis 7). What would prevent God from still punishing the wicked in the future? There are numerous biblical proofs that allude to the fact that there will be a judgment day and that God will use hell fire to punish the wicked (Revelation 21:8; Matthew 25:46; Matthew 13:50; Revelation 19:20. Should one attend church? " +
      " Most definitely. In the Bible there is a correlation between one's spiritual commitment to God and church fellowship. The Bible says we should 'not' neglect the gathering of saints like some have (Hebrews 10:25). This means that some during the early church had the unfortunate tendency of skipping or abandoning church fellowship. One cannot say, 'I abandoned church, but not God'. The church was put by God as a system of accountability for the believer and other believers (Galatians 6:1; 1 Corinthians 16:2; 1 Corinthians 12:13). The Bible describes the coming together of believers like oil flowing down Aaron the priest's beard to the bottom of his robe (Psalms 133:1-3). The gathering of believers is like log put together in a fire. A single log cannot burn alone. The strategy of Satan is to always remove them from a local church or gathering in order to put out their spiritual fire.",
  },
];

const faqs = [
  {
    id: 1,
    title: 'Should one attend church? ',
    details:
      "Most definitely. In the Bible there is a correlation between one's spiritual commitment to God and church fellowship. The Bible says we should 'not' neglect the gathering of saints like some have (Hebrews 10:25). This means that some during the early church had the unfortunate tendency of skipping or abandoning church fellowship. One cannot say, 'I abandoned church, but not God'. The church was put by God as a system of accountability for the believer and other believers (Galatians 6:1; 1 Corinthians 16:2; 1 Corinthians 12:13). The Bible describes the coming together of believers like oil flowing down Aaron the priest's beard to the bottom of his robe (Psalms 133:1-3). The gathering of believers is like log put together in a fire. A single log cannot burn alone. The strategy of Satan is to always remove them from a local church or gathering in order to put out their spiritual fire.",
  },
  {
    id: 2,
    question: 'Which day should Christians use as a day for church gathering?',
    answer:
      "In the Old Testament, the Sabbath (Saturday) was designated for church gathering (Deuteronomy 5:14; Exodus 31:14). The Old Testament believer was required to keep the Sabbath day religiously, if not, face death. Jesus came, made it clear that He was the Lord of the Sabbath (Mark 2:27-28), signifying that Christianity wasn't about religiously keeping one day but all days for the Lord. Colossians 2:16 makes it clear that not observing the Sabbath (Saturday worship) should not be condemnation for the New Testament believer. The early church Christians then went on to meet on Sundays, which is the 1st day of the week (1 Corinthians 16:2; Matthew 28:11; Acts 20:7) according to Jewish tradition, and that has been a pattern for the church to date. So Sunday through the teaching of the apostles became the day for Christian gathering, not by law or legalism, but by grace.",
  },
  {
    id: 3,
    question: 'What does the Bible say about honoring parents?',
    answer:
      "The Bible says we should honor parents, for that leads to long life (Ephesians 6:2-3) Such leads to a blessing upon one. However, verses shouldn't be read in isolation. Scripture should be interpreted in chapters or the whole book. If read in isolation, some parents could use the above mentioned verse to guilt trip or manipulate their children. Whilst the child has the responsibility to honor their parent, the parent has a responsibility not to provoke their child (Ephesians 6:4)",
  },
  {
    id: 4,
    question: 'Should the modern day Christian tithe?',
    answer:
      "It is important to approach the concept of tithing as a 'principle' for the believer 'not a command' for the believer. There definitely is no direct Scripture in the New Testament that commands the New Testament believer to tithe, but that does not rule out the Old Testament promises and principles locked in the tithe. God's promises of blessing (Malachi 3:10) locked in tithing are still much alive for the New Testament believer. Tithing is a powerful biblical principle that was there even before the Law of Moses (Genesis 14:19-20; Genesis 28:20-23), making the tithe not the Law, but principle. Tithing is a principle for honoring God. The carnal person sees their income as their own sweat. The carnal mind is about receiving, keeping or eating everything. But the believer's mind sees all one has as coming from the Lord. The believer's mind seeks to honor God for what He has provided.  Deuteronomy 8:18 say, 'Remember the Lord your God, for it is He that gives you power to make wealth'. If we understand that the believer in the mordern day is still bound to honoring God through their wealth (Proverbs 3:9), we will not argue about the tithe. God gives us 100 percent provision, and out of the 100, He says, 'Reserve 10% for me, then keep the rest of the 90% for yourself' (Leviticus 27:30). Jesus does speak about tithing in the New Testament, says whilst the worshipper should practice tithing, they should not negligent the more important matters of the faith, which are justice, mercy and faithfulness (Matthew 23:23). Yes, that was not a direct command from Jesus for one to tithe, but Jesus still didn't speak against tithing. If tithing was wrong, Jesus would have said so. When we tithe, we now tithe not from compulsion or legalism, but out of grace and gratitude. The Bible says we should not give out of compulsion (2 Corinthians 9:7). When we understand how much God has been good to us, setting aside a 10th for the Lord becomes no issue. Actually the New Testament believer realizes they are not limited to giving 10% of their income; they can give 20%, 30%, anything beyond. This doesn't mean that one should be forced to tithe even when they be in debt. One could still commit to a certain amount to give from their income. It could be 5% of their income, for an example. The key is COMMITMENT. As time goes, one can grow into the 10%. There will always be arguments against tithing, but one thing we cannot argue about is that there is power in commitment; there is a sense of spiritual maturity in a believer who gives in a committed form than with one who gives casually. Where should the tithe go? To the charity or to church? Scripture is clear, to the temple, church (Malachi 3:10); so that temple needs are met. Without a shadow of doubt, a church that has believers who tithe will never run short of supply. Temple needs are met without a sweat.",
  },
  {
    id: 5,
    question: 'Will God punish people with hell fire?',
    answer:
      "Some say 'God is a good and gracious God, therefore he cannot punish people with fire'. Well He did punish people with water (a flood), the majority wicked died during the flood (Genesis 7). What would prevent God from still punishing the wicked in the future? There are numerous biblical proofs that allude to the fact that there will be a judgment day and that God will use hell fire to punish the wicked (Revelation 21:8; Matthew 25:46; Matthew 13:50; Revelation 19:20. Should one attend church? " +
      " Most definitely. In the Bible there is a correlation between one's spiritual commitment to God and church fellowship. The Bible says we should 'not' neglect the gathering of saints like some have (Hebrews 10:25). This means that some during the early church had the unfortunate tendency of skipping or abandoning church fellowship. One cannot say, 'I abandoned church, but not God'. The church was put by God as a system of accountability for the believer and other believers (Galatians 6:1; 1 Corinthians 16:2; 1 Corinthians 12:13). The Bible describes the coming together of believers like oil flowing down Aaron the priest's beard to the bottom of his robe (Psalms 133:1-3). The gathering of believers is like log put together in a fire. A single log cannot burn alone. The strategy of Satan is to always remove them from a local church or gathering in order to put out their spiritual fire.",
  },
];

export default function FAQ01() {
  return (
    <section className='py-32'>
      <div className='container'>
        <div className='text-center'>
          <Badge className='text-xs font-medium'>FAQ</Badge>
          <h1 className='mt-4 text-4xl font-semibold'>
            Common Questions & Answers
          </h1>
          <p className='mt-6 font-medium text-muted-foreground'>
            Can’t find the answer you’re looking for? please email us or Call:{' '}
            <br />
            +27 73 841 8903 || info@yonderworshipcentre.co.za.
          </p>
        </div>
        <div className='mx-auto mt-14 max-w-screen-sm'>
          {faqs.map((faq, index) => (
            <div key={index} className='mb-8 flex gap-4'>
              <span className='flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary'>
                {index + 1}
              </span>
              <div>
                <div className='mb-2 flex items-center justify-between'>
                  <h3 className='font-medium'>{faq.question}</h3>
                </div>
                <p className='text-sm text-muted-foreground'>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
