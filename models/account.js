const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const { Schema } = mongoose;
const Account = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: String,
	staffRole: String,
	gameSettings: {
		staffDisableVisibleElo: Boolean,
		staffDisableStaffColor: Boolean,
		isRainbow: Boolean,
		newReport: Boolean,
		customCardback: String,
		customCardbackSaveTime: String,
		customCardbackUid: String,
		enableTimestamps: Boolean,
		enableRightSidebarInGame: Boolean,
		disablePlayerColorsInChat: Boolean,
		disablePlayerCardbacks: Boolean,
		disableHelpMessages: Boolean,
		disableHelpIcons: Boolean,
		disableConfetti: Boolean,
		disableCrowns: Boolean,
		disableSeasonal: Boolean,
		soundStatus: String,
		unbanTime: Date,
		unTimeoutTime: Date,
		fontSize: Number,
		fontFamily: String,
		isPrivate: Boolean,
		privateToggleTime: Number,
		blacklist: Array,
		tournyWins: Array,
		hasChangedName: Boolean,
		previousSeasonAward: String,
		disableElo: Boolean,
		fullheight: Boolean,
		gameNotes: {
			top: Number,
			left: Number,
			width: Number,
			height: Number
		},
		playerNotes: Array
	},
	verification: {
		email: String,
		verificationToken: String,
		verificationTokenExpiration: Date,
		passwordResetToken: String,
		passwordResetTokenExpiration: Date
	},
	signupIP: String,
	lastConnectedIP: String,
	verified: Boolean,
	isBanned: Boolean,
	isTimeout: Date,
	bio: String,
	games: Array,
	wins: Number,
	losses: Number,
	rainbowWins: Number,
	rainbowLosses: Number,
	winsSeason1: Number,
	lossesSeason1: Number,
	rainbowWinsSeason1: Number,
	rainbowLossesSeason1: Number,
	winsSeason2: Number,
	lossesSeason2: Number,
	rainbowWinsSeason2: Number,
	rainbowLossesSeason2: Number,
	winsSeason3: Number,
	lossesSeason3: Number,
	rainbowWinsSeason3: Number,
	rainbowLossesSeason3: Number,
	previousDayElo: Number,
	created: Date,
	isOnFire: Boolean,
	lastCompletedGame: Date,
	lastVersionSeen: String,
	isFixed: Boolean,
	eloSeason: Number,
	eloOverall: Number,
	hashUid: String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);
