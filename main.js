function makeSoundcloudEmbed(track)
{
	var embed = $('<iframe>');
	embed.attr('width', 600).attr('height', 166);
	embed.attr('scrolling', 'no');
	embed.attr('frameborder', 'no');
	
	var url = 'https%3A//api.soundcloud.com/tracks/' + track;
	var xtra = '&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false';
	embed.attr('src', 'https://w.soundcloud.com/player/?url=' + url + xtra);

	return embed;
}

function loadRecentEpisode(data)
{
	if (!data || !data.length) return;
	$('#recent-ep').empty().append(makeSoundcloudEmbed(data[0].id));
	$('#recent-ep-toggle').show();
}

$(document).ready(function()
{
	$.get('http://api.soundcloud.com/users/170373327/tracks?client_id=cae8c1ce283582cf5c51176d3f3e6f81', loadRecentEpisode, 'json');
});