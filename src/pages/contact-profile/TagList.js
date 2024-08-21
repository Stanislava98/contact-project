import TagListItem from './TagListItem';
import { styled } from '@mui/material';

const Root = styled('div')({
  display: 'flex',
  gap: 8,
  flexWrap: 'wrap',
});

const TagList = ({ tags = [] }) => {
  return (
    <Root>
      {tags.map((tag) => (
        <TagListItem key={tag.id} tag={tag.tag} />
      ))}
    </Root>
  );
};

export default TagList;
