import {safeQuerySelector} from 'safe-query-selector';


export default{
  string: input => safeQuerySelector(input),
  object: input => input
};
