import PropTypes from 'prop-types';
import {
  StatBox,
  Title,
  StatList,
  Item,
  Label,
  Percentage,
  Box,
} from './Statistics.styled';
// import { StatBox } from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Box>
      {title && <Title>{title}</Title>}
      <StatBox>
        <StatList>
          {stats.map(stat => {
            return (
              <Item key={stat.id}>
                <Label>{stat.label}</Label>
                <Percentage>{stat.percentage}</Percentage>
              </Item>
            );
          })}{' '}
        </StatList>
      </StatBox>
    </Box>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};