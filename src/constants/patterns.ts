export const patterns = {
	url: /^(https?:\/\/?)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/i,
	telegramURL:
		/^(https?:\/\/?)?(www\.)?(t|telegram)\.(me|dog)\/(joinchat\/|\+)?([\w-]+)$/i,
	discordInviteLink:
		/^(https?:\/\/?)?(www\.)?(discord\.(gg|io|me|li|com)|discordapp\.com)\/((invite|users)\/)?([a-zA-Z0-9-]{2,32})$/i,
	justEnglish: /^(?!\s)[\x20-\x7E]*$/,
	profileUsername:
		/^(?=.{5,32}$)(?!.*__)(?!^(xiroco|admin|support))[a-z][a-z0-9_]*[a-z0-9]$/i,
	email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,10}$/i,
	twitterUsername: /^[A-Za-z0-9_]{4,15}$/i,
	instagramUsername: /^[\w](?!.*?\.{2})[\w.]{1,28}[\w]$/i,
	linkedinUrl:
		/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([-a-zA-Z0-9]+)\/*$/i,
};

// ? telegramUsername: /^(?=.{5,32}$)(?!.*__)(?!^(telegram|admin|support))[a-z][a-z0-9_]*[a-z0-9]$/i,
