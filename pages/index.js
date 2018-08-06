import Header from '../components/header';
import withMui from '../shared/MUI/withMUI';
import 'isomorphic-fetch';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'next/link';

const Index = ({ posts }) =>
  <div>
    <Header />
    {
      posts.map(x =>
        <Card key={x.id}>
          <CardHeader title={x.title} />
          <CardText>
            <RaisedButton fullWidth={true} primary={true}>
              <Link href={`/post?id=${x.id}`} as={`/blog/${x.id}`}>
                <a>
                  Click to view post!
                </a>
              </Link>
            </RaisedButton>
          </CardText>
        </Card>
      )
    }
  </div>

Index.getInitialProps = async () => {
  const response = await fetch(`${process.env.BLOGGER_URL}?key=${process.env.API_KEY}`);
  const data = await response.json();
  console.log(data);
  return { posts: data.items, aaa: 3 };
}

export default withMui(Index);
