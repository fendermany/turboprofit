<?php
if (!empty($_POST['search'])) {
	$search = $_POST['search'];
	$search = mb_eregi_replace("[^a-zа-яё0-9 ]", '', $search);
	$search = trim($search);

	$sth = $dbh->prepare("SELECT * FROM `city` WHERE `name` LIKE '{$search}%' ORDER BY `name`");
	$sth->execute();
	$result = $sth->fetchAll(PDO::FETCH_ASSOC);

	if ($result) {
?>
		<ul class="search__results">
			<?php foreach ($result as $row) : ?>
				<li class="search__results-item">
					<a href="<?php echo $row['link']; ?>" class="search__results-link"><?php echo $row['name']; ?></a>
				</li>
			<?php endforeach; ?>
		</ul>
<?php
	}
}
