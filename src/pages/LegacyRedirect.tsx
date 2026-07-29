import { useEffect } from 'react';
import { useNavigate } from 'react-router';

/** Legacy URLs from the domain's previous site — send visitors home. */
export default function LegacyRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/', { replace: true });
  }, [navigate]);
  return null;
}
