import {
	Grid,
	Typography,
	Button,
	AppBar,
	Toolbar,
	TextField,
	InputAdornment,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';
import './Header.css';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		zIndex: 0,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));
//streak
const Header = () => {
	const classes = useStyles();
	const searchBool = true;
	let handleSearchText;
	let basket;
	let searchResults;
	return (
		<Grid>
			<AppBar
				position="fixed"
				style={{ backgroundColor: '#1a6c7a', width: '100%' }}
			>
				<Toolbar className={classes.title}>
					<Typography className="header_brand" variant="h6">
						<Link to="/" className="header_link">
							<img
								src="https://pbs.twimg.com/profile_images/1342658298982653952/iOEPaRBp_200x200.jpg"
								alt="betex-clothing"
								style={{
									height: '70px',
									width: '100px',
									paddingTop: '5px',
									paddingLeft: '5%',
								}}
							/>
						</Link>
					</Typography>
					<Typography variant="h5" className="header_row">
						<Link className="header_link" to="/women">
							<div className="header_button">
								<Button style={{ color: '#fff' }}>Women</Button>
							</div>
						</Link>
						<div className="header_button">
							<Link className="header_link" to="/men">
								<Button style={{ color: '#fff' }}>Men</Button>
							</Link>
						</div>
						<div className="header_button">
							<Link className="header_link" to="/children">
								<Button style={{ color: '#fff' }}>Children</Button>
							</Link>
						</div>
						<div className="header_button">
							<Link className="header_link" to="/bags">
								<Button style={{ color: '#fff' }}>Bags</Button>
							</Link>
						</div>
						<div className="header_button">
							<Link className="header_link" to="/shoes">
								<Button style={{ color: '#fff' }}>Shoes</Button>
							</Link>
						</div>
						<div
							className="header_button"
							style={{ display: 'flex', textAlign: 'center' }}
						>
							{!searchBool && (
								<form onSubmit={searchResults}>
									<TextField
										onChange={handleSearchText}
										InpendAdornment={
											<InputAdornment position="end">
												<SearchIcon style={{ color: '#fff' }} />
											</InputAdornment>
										}
									/>
								</form>
							)}
							<Link to="/search">
								<Button style={{ color: '#fff' }}>
									<SearchIcon
										style={{
											color: '#fff',
											borderBottomColor: '#adadad',
										}}
									/>
								</Button>
							</Link>
						</div>
						<Link to="/cart" className="header_link">
							<div className="header_button">
								<Button style={{ color: '#fff' }}>
									<LocalMallIcon style={{ color: '#fff' }} />
									<sup style={{ fontSize: '10px' }}>
										{basket?.length > 0 && basket?.length}
									</sup>
								</Button>
							</div>
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
		</Grid>
	);
};
export default Header;
